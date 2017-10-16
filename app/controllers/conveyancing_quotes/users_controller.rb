# frozen_string_literal: true

module ConveyancingQuotes
  class UsersController < BaseController
    before_action :set_location
    before_action :valid_user, only: %i[edit update show]
    before_action :current_user, only: %i[thank_you]

    def new
      session.delete(:conveyancing_quote)
      @user = @location.users.new
      @user.save!
      session[:conveyancing_quote] = @user.token
      @conveyancing_quote_sale_and_purchase = @user.build_sale_and_purchase
      @conveyancing_quote_sale_and_purchase.build_sale
      @conveyancing_quote_sale_and_purchase.build_purchase
    end

    def update
      @update = @user.update(user_params)
      deliver_quote_email(@user) if @update

      respond_to do |format|
        format.js do
          render :update
        end
        format.html do
          if @update
            @user.update_attributes(submitted: true)
            ConveyancingQuoteMailer.new_quote_notification(@user).deliver_now
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

    def user_params
      params.require(:conveyancing_quotes_user).permit(
        :forename, :surname, :email, :phone, :buying, :selling,
        :conveyancing_email_permission, :buying_and_selling, :complete
      )
    end

    def deliver_quote_email(user)
      ConveyancingQuoteMailer.new_quote(user).deliver_now
      user.update_attributes(quote_emailed: true) unless user.quote_emailed?
    end
  end
end
