module Optimadmin
  module ArticleCategories
    class PublishedController < Optimadmin::ArticleCategoriesController
      layout 'optimadmin/inline_editing'

      def index
        @pagination_helper = ArticleCategory.published
                                            .field_search(params[:search])
                                            .pagination(params[:page], params[:per_page])

        @article_categories = Optimadmin::BaseCollectionPresenter.new(
          collection: @pagination_helper,
          view_template: view_context,
          presenter: Optimadmin::ArticleCategoryPresenter
        )

        render partial: 'optimadmin/article_categories/table'
      end
    end
  end
end
