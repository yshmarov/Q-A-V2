class AddSessionReferenceToQuestion < ActiveRecord::Migration[5.2]
  def change
    add_reference :questions, :session, index: true
  end
end
