Gopexo::Application.routes.draw do
  authenticated :user do
    root :to => 'registrations#share'
  end
  match '/about' => 'home#about'
  devise_for :users, :controllers => { :registrations => "registrations" }
  devise_scope :user do
  root :to => "devise/registrations#new"
  match '/users/sign_in' => "devise/registrations#new"
  match "refer/:token" => "registrations#refer", :as => "referral"
  match "/share" => "registrations#share"
end

end
