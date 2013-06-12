class RegistrationsController < Devise::RegistrationsController

  # override #create to respond to AJAX with a partial
  def create
    build_resource

    if resource.save
        redirect_to '/share'
    else
      puts "IN HERE 3"
      clean_up_passwords resource
      render :action => :new, :layout => !request.xhr?
    end
  end

  def refer
    @referrer = User.where(:authentication_token => params[:token]).first

    render 'devise/registrations/new'
  end

  def share
    respond_to do |format|
      format.html
    end 
  end

  protected

  def after_inactive_sign_up_path_for(resource)
    # the page prelaunch visitors will see after they request an invitation
    # unless Ajax is used to return a partial
    '/thankyou.html'
  end

end
