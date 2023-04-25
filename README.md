# Card-Validator
This is a simple web application that allows you to check if a credit card number is valid or not, using the Luhn algorithm. The application checks for the validity of Mastercard, Visa, and American Express credit card numbers.

Usage

    Open the index.html file in a web browser.
    Enter a credit card number in the input field.
    Click on the "Enter" button.
    The application will display a message indicating whether the credit card number is valid or not.

Validation Algorithm

The validation algorithm used in this application is the Luhn algorithm, also known as the "modulus 10" algorithm. The algorithm checks for errors in a credit card number by calculating a checksum digit, which is then compared to the last digit of the credit card number. If the checksum digit matches the last digit of the credit card number, the credit card number is considered valid.

Supported Credit Card Types

The application currently supports the following credit card types:

    Mastercard (prefix 51-55)
    Visa (prefix 4)
    American Express (prefix 34, 37)
