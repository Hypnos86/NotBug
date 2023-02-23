users = [{"name": "Kamil", "country": "Poland"}, {"name": "John", "country": "USA"}, {"name": "Yeti"}]

poland_users = [user['name'] for user in users if 'country' in user.keys() and user['country'] == 'Poland']

print(poland_users)

