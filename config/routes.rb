Rails.application.routes.draw do
  root to: 'home#index'
  get 'index', to: 'home#index'
  get 'pricing', to: 'home#pricing'
  get 'features', to: 'home#features'
  get 'contact_us', to: 'home#contact_us'
  get 'privacy_policy', to: 'home#privacy_policy'
  get 'terms_of_service', to: 'home#terms_of_service'
  get 'customer_agreement', to: 'home#customer_agreement'
  get 'security', to: 'home#security'

  get 'hello_world', to: 'hello_world#index'

end
