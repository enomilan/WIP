# System Design

---

What does it mean to be a **Question** application?

## Functional Requirements

 Question Feature

 ### In Scope 

 - Users can submit a question
 - Users see a list of submitted questions
 - Answered Questions can be deleted

 ### Out of Scope

 - Answers
 - Resolved vs Deleted
 - User Authentication
 - UI enhancements (D&D, Darkmode) 
 - Updating a Question
 - Voting/Ranking
 - Categories/Subs 

 ## Non-Functional Requirements
 - Availability: if a User opens the app they always see something
 - Reliability: Questions are never lost
 - Latency: response times < 200m/s>

## Database Design (Models + Schema)
 > What does it mean to be a Question?

 - Content 
 - Name (of Asker)

 > How should we store this Question

 - MongoDB (Non-relational, NoSQL)


 ## Capacity and Constraints 

 