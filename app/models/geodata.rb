class Geodata < ActiveRecord::Base
  
  def self.select_unique 
    r = find_by_sql ("Select name, max(lat) as lat, max(lng) as lng, max(coupon_count) as coupon_count 
    from geodatas group by name limit 49")
  end
 
end 
