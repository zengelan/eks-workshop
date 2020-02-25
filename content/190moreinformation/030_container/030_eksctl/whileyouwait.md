---
title: "While you wait"
date: 2018-08-07T13:36:57-07:00
weight: 25
tags:
  - MFESummit2020
---
#### While you are waiting for the EKS cluster to be created:


## YAML Primer

   YAML Ain’t Markup Language (YAML) is a serialization language that has become popular due to its ease of readability and it use as an alternative to JSON for object serialization. This short YAML tutorial will demonstrate the basic language syntax and conclude with a short example of parsing a YAML file using Python.


   Let’s Review a sample YAML file for a brief overview.

        ---
    
        event: "SKO 2020"
 
        company: "McAfee"
 
        year: 2020
 
        labcomplete: true
 
        overview:
 
          lessonsections:
   
             - intro
     
             - containerlab
     
             - shiftleftlab
     
             - conclusion
     
 
## YAML File Syntax

   A YAML file always starts with three dashes. These dashes indicate the start of a new YAML document. YAML supports multiple documents, and compliant parsers will recognize each set of dashes as the beginning of a new one

   Next, we see the construct that makes up most of a typical YAML document: a key-value pair. In this example, event is a key that points to a string value: SKO 2020.

   YAML supports more than just string values. The file starts with four key-value pairs. They have four different data types. event and company are strings. year is an integer number. labcomplete is a boolean. You can enclose strings in single or double-quotes or no quotes at all. YAML recognizes unquoted numerals as integers or floating point. The fifth item labsections is an array. It has four elements. intro, containerlab, shiftleftlab and conclusion. 

   In the example above lessonsections is indented with two spaces. Indentation is how YAML denotes nesting. The number of spaces can vary from file to file, but tabs are not allowed. We’ll look at how indentation works below.

## OUTLINES AND INDENTATION IN YAML DOCUMENTS

   Whitespace is part of YAML’s formatting. Unless otherwise indicated, newlines indicate the end of a field.

   You structure a YAML document using indentation. The indentation level can be one or more spaces. The YAML specification forbids tabs since many tools treat them differently.

## COMMENTS

Comments begin with a pound sign. They can appear after a document value or take up an entire line. They are ignored by the YAML parser

      .# This is a comment line

      foo: bar     # this comment comes after a key mapping


## DATA TYPES IN YAML

   Values in YAML are key-value pairs are they are scalar. They act similar to the scalar types in many programming languages like Javascript or Python. Strings are placed in quotes, numbers are non quoted.  The YAML parser will assign a data type based on the scanning proess. 


     Key-Value Pairs and Dictionaries

       The key-value is YAML’s basic building block. 
       
       Every item in a YAML document is a member of at least one dictionary. 
       
       The key is always a string. The value is a scalar so that it can be any datatype.

      A key value in YAML can be a string, a number, or another dictionary.

  # Numeric types

     YAML recognizes numeric types. We saw floating point and integers above. YAML supports several other numeric types.

     An integer can be decimal, hexidecimal, or octal.

     The following are some examples of numerical types

           ---
      
          intkey: 12345
    
          hexkey: 0x12d4
    
          octkey: 023332
          
 
       As you expect, Ox indicates a value is in hex, and a leading zero denotes an octal value.
       

       YAML supports both fixed and exponential floating point numbers as well.

          ---
    
          floatkey: 1230.15
    
          expkey:  12.3015e+05

       When evaluated these entries are interpreted as 
    
          floatkey : 1230.15
    
          expkey : 1230150.0

       Finally, we can represent a key as  not-a-number (NAN) or infinity.

         ---
    
         infkey: .inf
     
         nonum: .NAN

      In this example infkey has a value of infinity and nonum has. value of NAN.  (Not a number)

 # String Types

   YAML strings are Unicode based . In most situations, quotes are optional unless we use escape sequences in our string 
   
          ---
    
          teststring: this is a normal string
    
          specialstring: "This is not a normal string\n"
    
          specialstring2: this is not a normal string\n
    

    NOTE** YAML will not escape strings with single quotes, but the single quotes help to avoid
    having string contents interpreted as document formatting.


 # Multi-line String values
 
 String values can span more than one line. With the fold operator (the greater than character)
 A string can bedefined in a block using this method
 
     longstring: >

        this is not a normal string it
  
        spans more than
  
        one line
 
   In this example, it is parsed wihtout the new lines

   The output in this example would be 

      longstring : this is not a normal string it spans more than one line


   IF we want to interpret a field exactly as is,  we use the | pipe character in place of the > sign as follows:

      longstring: |

         this is not a normal string it
  
         spans more than
  
         one line
  

      And the output is 

         longstring : this is not a normal string it

         spans more than

         one line



 # Assigning NULL values to a key 

   You can enter null values when assigning a key using the tilde or the unquoted word null

      ---

      nullkey: ~

      nullkey2: null

 # Boolean Values

 YAML allows the assignment of boolean values using the keywords True, On and Yes for true or False, Off, or No for false  
 values.


      ---
   
     tkey: True

     fkey: False

     light: On

     TV: Off


 # Arrays in YAML files

 An array can contain any valid YAML value. The values in a list do not have to be the same type.

 You can specify arrays or lists on a single or multi line.  Both formats are supported by YAML.

  Single Line Example
  
      ---
  
      items: [ 10, 20, 30, 40, 50 ]
   
      names: [ "ten", "twenty", "thirty", "fourty" ]
   

 # Multi Line Example

      ---
      
      items:
   
        - 1 
     
        - 2 
     
        - 3
     
        - 4 
     
        - 5 
     

      names:
        
        - "one"
     
        - "two"
     
        - "three"
     
        - "four"
     

 # Multiple documents

 A document starts with three dashes and ends with three periods. Some YAML processors require the document start operator.  
 The end operator is usually optional.


 # YAML Parse Example using Python


   Consider this document. The items inside stuff are indented with two spaces.

         ---
      
         main: "SKO2020"

        session1: "cyberlab"
     
        session2: "containerlab"
     
        lesson1:"containers"
       
        lesson2: "kubernetes"
       
       
   For this example, we will saved the above simple code to a file names. sko2020.yml

   For our test we will create a somple python program that reads in the YAML file stream, maps it into a python dictionary    and allows us to iterate through the ifnormation. TAML processors are available or many languages

   For our python example we will use the PyYAML package

      import yaml

      if (__name__ == '__main__'):

          stream = open("sko2020.yaml", 'r')
    
          dictionary = yaml.load(stream)
    
          for key, value in dictionary.items():
    
              print (key + " : " + str(value))
 
      The output is:

         main : 'SKO2020'

         session1 : 'cyberlab'

         session2 : 'containerlab'

         session2 : {'lesson1': 'containers', 'lessons2': 'kubernetes'}




