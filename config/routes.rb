Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'

  get '/', to: 'landing_page#index'
end
