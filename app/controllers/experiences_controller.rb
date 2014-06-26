class ExperiencesController < ApplicationController
  
  def index
    @experience = Experience.new

  end

  def pins
    @experiences = current_user.experiences.all
    render :json => @experiences
  end


  def show
    @experience = Experience.find(params[:id])
  end

  def new
    @experience = current_user.experiences.new
  end

  def create
    @experience = current_user.experiences.new(params_experience)
    if @experience.save
      # redirect_to experiences_path
      render :json => @experience
    else
      render :new
    end
  end

  def profile
    @current_user = current_user
  end


  private
   def params_experience
    params.require(:experience).permit(:caption, :description, :address)
  end

end
