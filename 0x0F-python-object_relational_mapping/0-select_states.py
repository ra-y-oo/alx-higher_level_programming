#!/usr/bin/python3
"""
Lists all states from the database hbtn_0e_0_usa.
Usage: ./0-select_states.py <mysql username> \
                            <mysql password> \
                             <database name>
"""
import MySQLdb
import sys

# MySQL server connection details
mysql_username = sys.argv[1]
mysql_password = sys.argv[2]
database_name = sys.argv[3]

# Connect to MySQL server
db = MySQLdb.connect(
    host="localhost",
    port=3306,
    user=mysql_username,
    passwd=mysql_password,
    db=database_name
)

# Create a cursor object to interact with the database
cursor = db.cursor()

# Execute the SQL query to retrieve the list of states
query = "SELECT * FROM states ORDER BY states.id ASC"
cursor.execute(query)

# Fetch all the rows from the result set
states = cursor.fetchall()

# Display the results
for state in states:
    print(state)

# Close the cursor and database connection
cursor.close()
db.close()

