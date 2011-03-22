class MapController < ApplicationController
  
  layout 'default'
  
  def index
    @points = Geodata.select_unique.collect {|t| t.attributes}
  end 

end
