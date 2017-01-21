import requests



while True:
	input("hit enter")
	url = "http://137.112.158.242:3000/"
	headers = {
	    'cache-control': "no-cache",
	    'postman-token': "911881b4-7063-b87a-4226-86e2d46df2cc"
	    }
	try:
		response = requests.request("GET", url, headers=headers)
		print(response.text)

	except:
		print("request did not work")
		pass
