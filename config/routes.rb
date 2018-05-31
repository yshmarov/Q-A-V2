Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'

  root to: 'landing_page#index'
end
