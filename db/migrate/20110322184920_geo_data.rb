class GeoData < ActiveRecord::Migration
  def self.up
    create_table :geodatas do |t|
    t.integer  :site_id
    t.string   :name
    t.decimal  :lat,  :precision=>15, :scale=>10
    t.decimal  :lng, :precision=>15, :scale=>10
    t.integer  :coupon_count
    end
  
  end

  def self.down
    drop_table :geodatas
  end
end
