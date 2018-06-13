# frozen_string_literal: true

module ConveyancingQuotes
  class UsersController < BaseController
    before_action :set_location
    before_action :valid_user, only: %i[edit update show]
    before_action :current_user, only: %i[thank_you]

    include UserSetup

    def new
      seo_settings
      # set_up_conveyancing_quote(@location)
      session.delete(:conveyancing_quote)
      @user = @location.users.new(ip_address: request.remote_ip)
    end

    def create
      @user = @location.users.new(user_params.merge(ip_address: request.remote_ip))
      respond_to do |format|
        format.js do
          if @user.save
            session[:conveyancing_quote] = @user.token
            @conveyancing_quote_sale_and_purchase = @user.build_sale_and_purchase
            @conveyancing_quote_sale_and_purchase.build_sale
            @conveyancing_quote_sale_and_purchase.build_purchase
            render :create
          else
            render :new
          end
        end
      end
    end

    def update
      @update = @user.update(user_params)

      if @update
        deliver_quote_email(@user)
        record_form_submission(user)
      end

      respond_to do |format|
        format.js do
          render :update
        end
        format.html do
          if @update
            @user.update_attributes(submitted: true)
            ConveyancingQuoteMailer.new_quote_notification(@user).deliver_later
            redirect_to thank_you_conveyancing_quotes_location_users_path(@user.quote_location)
          else
            render :edit
          end
        end
      end
    end

    def show; end

    def thank_you; end

    private

    def seo_settings
      seo_entry = SeoEntry.find_by(nominal_url: request.path.gsub('/request/new', ''))
      return unless seo_entry
      @rich_snippet = seo_entry.rich_snippet
      @title = seo_entry.title
      @meta_description = seo_entry.meta_description
      @meta_tags = seo_entry.title
    end

    def user_params
      params.require(:conveyancing_quotes_user).permit(
        :forename, :surname, :email, :phone, :buying, :selling,
        :conveyancing_email_permission, :buying_and_selling, :details_required
      )
    end

    def deliver_quote_email(user)
      ConveyancingQuoteMailer.new_quote(user).deliver_later
      return if user.quote_emailed?
      @email_sent = true
      user.update_attributes(quote_emailed: true)
    end
  end
end
