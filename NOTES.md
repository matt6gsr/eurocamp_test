Task 1:

These notes are going off the current data in the databse.
Currently there is no way to reference the parc and/or the user in the booking table.
When joining the tables, there are no matches. Users in the booking table do not exist in the user table. Parcs in the booking table do not exist in the parc table.
The parc ids in the parcs table are not consistent with the parc column in the booking table. In the parc table the id is an integer and the parc in the booking table is a UUID.
The user ids in the user table do not exist in the user column in the booking table.
In the booking table the the parc column should be renamed to parc_id and reference the the id column in the parc table.
Also in the booking table, the user column should be renamed to user_id and reference the id column in the user table.
A booking should not be inserted if the user and/or the parc does not exist in the respective tables. This can be achieved with foreign keys.
The email field in the user table should be unique, so not to create 2 users with the same email address.
The bookingdate column should be changed from varchar to date type.
Additionally in the booking table, it may be handy to add a check_in and check_out date.

Task 2:

I was involved in a Typescript conversion of the project I worked on.
For 4 years at my last role we used styled components or css-in-js. However we started to use utility-first technology using TailwindCSS.
The project I worked on was made using create-react-app, however I converted the project to Vite.
We also utilised shadcn and zod when rewriting a particular part of the project.
I have been looking into the new shadcn-cli.
