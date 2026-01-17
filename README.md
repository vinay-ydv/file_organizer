******Problem******

My Downloads folder gets cluttered with different types of files such as PDFs, images, ZIP files, and documents.
Manually organizing them is repetitive and inefficient.


*******How to Run the Program*******

1. Install Node.js  in your system from https://nodejs.org
2. Clone or download the project folder.
3. Open Command Prompt / Terminal.

Navigate to the project directory:
cd file-organizer

4. Run the Program
Execute the following command:
node organize.js --path "C:/Users/vinay/Downloads"


***********Design Decisions********

Node.js: Ideal for file system operations and cross-platform use

Modular design:
organize.js handles CLI input
organizer.js contains core logic
Error handling for invalid paths and missing arguments
Extensible file type mapping for easy updates