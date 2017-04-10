require "sinatra"

get "/" do
  erb :home
end

get "/contact" do
  erb :contact
end

get "/shop" do
  erb :shop
end

get "/about" do
  erb :about
end
