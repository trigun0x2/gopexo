Gopexo::Application.routes.draw do
  mount RailsEmailPreview::Engine, at: 'emails'

  authenticated :user do
    root :to => 'devise/registrations#new'
  end
  match '/about' => 'home#about'
  match '/admin' => 'users#index'
  match '/imageattr' => 'home#imageattr'
  devise_for :users, :controllers => { :registrations => "registrations" }
  devise_scope :user do
    root :to => "devise/registrations#new"
    match '/users/sign_in' => "devise/registrations#new"
    match "refer/:token" => "registrations#refer", :as => "referral"
    match "/thanks" => "registrations#thanks", :as => "thanks"
  end
  resources :users do
    get 'invite', :on => :member
  end
end
