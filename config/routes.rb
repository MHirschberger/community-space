Rails.application.routes.draw do
  
  scope '/api' do
    resources :discussions do
      resources :comments, only: [:index, :new, :create, :show]
    end
    resources :comments, only: :destroy
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
