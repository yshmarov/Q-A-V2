class SessionSerializer
  include FastJsonapi::ObjectSerializer

  attributes :id, :ip
end
