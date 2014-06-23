class ExperiencesController < ApplicationController
  
  def index
    @experiences = Experience.all
  end

  def show
    @experience = Experience.find(params[:id])
  end

  def new
    @experience = Experience.new
  end

  def create
    @experience = Experience.new(params_experience)
    redirect_to @experience
  end






  private
   def params_experience
    params.require(:experience).permit(:caption, :description)
  end

end
