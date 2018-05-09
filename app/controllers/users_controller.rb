class UsersController < ApplicationController

  def index
    @users = User.all
    respond_to do |format|
      format.html {render json: @users}
    end
  end

  def show
    @user = User.find(params[:id])
    respond_to do |format|
    format.html
    format.json {render json: @user }
    end
  end

  def new

  end

  def create
    @user = User.create(user_params)
    respond_to do |format|
      format.json {render json: @user }
    end
  end

  def user_params
    params.require(:user).permit(:last_name,:first_name,:email,:content)
  end
end
