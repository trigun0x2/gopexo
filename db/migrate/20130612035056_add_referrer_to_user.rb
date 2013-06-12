class AddReferrerToUser < ActiveRecord::Migration
  def change
  	add_column :users, :authentication_token, :string
  	add_column :users, :referrer_token, :string
  end
end
