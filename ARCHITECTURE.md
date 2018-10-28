# Project architecture

This document try to gather the inspirations that led to the project architecture.

As both clients (website and mobile) are part of an entire system, i found interresting to try to put in common the business part and see what that leads us.

Obviously, both clients won't use ALL the _use-cases_ (that could lead to design problems), but i find that the application business is close enough to try to put everything in common.

## Clean architecture

This project is organised around the principles of the clean architecture, presented by Rober B. Martin in his [article](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

This architecture offers to organize the code in distinct layers:
- Frameworks and drivers: Web, Devices, UI, databases
- Interfaces: All that is in relation between Frameworks and Business layers
- Application Business Rules: Where the business logic is
- Enterprise Business Rules: aka Entities

## In the code

Trying to reproduce an architecture which is close to the one exposed above, in the code we have:

- _mobile/_ folder (Framework level): Where Expo's framework code and UI code is
- _website/_ folder (Framework level): Where React's framework code and UI code is
- _business/_ folder: 
  - _actions_ folder: Use-cases
  - _models_ folder: Entities
  - _reducers_ folder

**I am not sure yet what is the position of reducers in this architecture, since it is there to deal with side-effects and organize data. I am quite sure that it belongs to the business part, but not sûre exactly of the way.**