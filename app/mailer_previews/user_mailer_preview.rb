class UserMailerPreview
  def welcome_email
    UserMailer.welcome_email user
  end

end
