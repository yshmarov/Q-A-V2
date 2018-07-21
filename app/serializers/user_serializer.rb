class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :email, :company_name
  has_many :events
end
