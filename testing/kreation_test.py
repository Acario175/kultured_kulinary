from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options

import time

# Set up the browser (Chrome in this case)

chrome_options = Options()

# Set the detach option to True
chrome_options.add_experimental_option("detach", True)

driver = webdriver.Chrome(options=chrome_options)  # Make sure 'chromedriver' is in your PATH


try:
    # Navigate to the localhost page
    driver.get("http://localhost:3000/createrecipe")  # Adjust the port if necessary
    # driver.find_element(By.NAME, "directions").clear()

    # Wait for the page to load
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "body")))

    # Fill in the title
    title_input = driver.find_element(By.NAME, "title")
    title_input.send_keys("My Test Recipe")

    # Fill in the description
    desc_input = driver.find_element(By.NAME, "rec_description")
    # desc_input.click()

    desc_input.send_keys("This is a description of my recipe.")

    dirs_input = driver.find_element(By.NAME, "directions")

    dirs_input.send_keys(Keys.COMMAND + "a")
    # time.sleep(5)

    dirs_input.send_keys(Keys.DELETE)

    dirs_input.send_keys("Ingredients Below:\n1 cup flour\n 2 eggs\n 1/2 cup milk\nRecipe Below: \nMix ingredients, bake at 350°F for 30 minutes.")

    # Optionally, submit the form
    submit_button = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
    submit_button.click()


finally:
    # Close the browser
    # driver.quit()
    print("Done")
