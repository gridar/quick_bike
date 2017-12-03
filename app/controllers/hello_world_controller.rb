# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @response = RestClient.get 'https://api.jcdecaux.com/vls/v1/stations?', {params: {apiKey: "b8d371cde56181e747fd24227a1c18aea608f86f", contract: "Toulouse"}}
    @bike_props = { data: @response }
    @hello_world_props = { name: "Stranger" }
  end
end
