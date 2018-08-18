class CreateSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :sessions do |t|
      t.string   :ip, null: false, index: true
      t.datetime :created_at
    end
  end
end
