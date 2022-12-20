#!/usr/bin/env python
# coding: utf-8

# In[1]:


import csv
from bs4 import BeautifulSoup
from msedge.selenium_tools import Edge, EdgeOptions
import json
url = 'https://www.amazon.com/dp/B09JFFG8D7'
options = EdgeOptions()
options.use_chromium = True
options.headless = True
driver = Edge(options=options)
driver.get(url)
soup = BeautifulSoup(driver.page_source, 'html.parser')
results = soup.find_all('div', {'id': 'sp_detail'})
item2 = results[0].get('data-a-carousel-options')
d = json.loads(item2)
print(d['initialSeenAsins'])
