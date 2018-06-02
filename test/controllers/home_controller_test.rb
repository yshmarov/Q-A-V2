require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get home_index_url
    assert_response :success
  end

  test "should get pricing" do
    get home_pricing_url
    assert_response :success
  end

  test "should get features" do
    get home_features_url
    assert_response :success
  end

  test "should get contact_us" do
    get home_contact_us_url
    assert_response :success
  end

  test "should get privacy_policy" do
    get home_privacy_policy_url
    assert_response :success
  end

  test "should get terms_of_service" do
    get home_terms_of_service_url
    assert_response :success
  end

  test "should get customer_agreement" do
    get home_customer_agreement_url
    assert_response :success
  end

  test "should get security" do
    get home_security_url
    assert_response :success
  end

end
