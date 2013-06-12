Gopexo::Application.routes.draw do
  authenticated :user do
    root :to => 'home#index'
  end
  devise_scope :user do
    root :to => "devise/registrations#new"
    match '/users/sign_in' => "devise/registrations#new"
    match '/user/confirmation' => 'confirmations#update', :via => :put, :as => :update_user_confirmation
    match "refer/:token" => "registrations#refer", :as => "referral"
  end
  match '/about' => 'home#about'
  devise_for :users, :controllers => { :registrations => "registrations", :confirmations => "confirmations" }
  match 'users/bulk_invite/:quantity' => 'users#bulk_invite', :via => :get, :as => :bulk_invite
  resources :users do
    get 'invite', :on => :member
  end
end
