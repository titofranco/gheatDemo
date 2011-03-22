# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_gheat_session',
  :secret      => '56d218c51291ab785eb282eb074eb9bd19b2e1681b222606ba7ca72e7525d552d6d8fa4ea4a4e4fcd2f905cfb5f3d16b7943a2facfaf2287f8fbcdaaf106cba9'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
