require 'square_connect'

access_token = 'sandbox-sq0atb-AIVmTputqFCPd4pTVProVQ'

SquareConnect.configure do |config|
  config.access_token = access_token
end

locations_api = SquareConnect::LocationsApi.new

begin
  locations_response = locations_api.list_locations
  puts locations_response
rescue SquareConnect::ApiError => e
  raise "Error encountered while listing locations: #{e.message}"
end
