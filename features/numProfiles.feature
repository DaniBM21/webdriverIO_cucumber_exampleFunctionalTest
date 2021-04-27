Feature: To test the number of profiles that appear in the "nosotros" tab on  https://redsauce.net/es website
    Scenario: number of profiles
        Given that the visitor has accessed the Redsauce page
        When the visitor accesses the section "nosotros"
        Then the page shows 16 profiles