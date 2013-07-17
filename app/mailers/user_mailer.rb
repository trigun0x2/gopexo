class UserMailer < ActionMailer::Base
  default :from => "info@gopexo.com"

  def welcome_email(user)
    mail(:to => user.email, :subject => "Let's GoPexo!")
    headers['X-MC-GoogleAnalytics'] = ENV["DOMAIN"]
    headers['X-MC-Tags'] = "welcome"
  end

end