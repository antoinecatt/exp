class PagesController < ApplicationController
  
  def index
    redirect_to experiences_path unless current_user.nil?
  end
end
