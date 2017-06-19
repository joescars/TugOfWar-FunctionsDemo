# Tug of War with Azure Functions #

This simple demo game is used to teach basic concepts around building Azure Functions with node.js. 

It also provides a fun an interactive way to show Azure Functions in use. 

The following concepts are covered through this demo:

- Function Triggers
- Function Input & Output Bindings
- Reverse Proxies
- Serving Static Content via Proxy
- Debugging using VS Code
- Application Insights

## How to Play ##

- From the home page (*index.html*) the presenter creates two Teams. For example. Team A and Team B. 

- Upon submitting these teams a new "Game" is created. 

- The presenter then instructions players to visit play.html. They will see two buttons, one for Team A and one for Team B. 

- The goal is to have 1/2 the room hit one button and the other half the second button as fast as they can. 

- Each button press is logged and displayed in real time on the home page. When one team gets far enough ahead of the other team the Functions logo will move and eventually show a winner! 

## Images ##

![Game Setup](_static/game-setup.png)
*Teams are created*

![Player Interface](_static/game-interface.png)
*Players click their team button as fast as possible*

![Game Animation](_static/game-animation.gif)
*The logo animates towards the team with more clicks*

## How does it work? ##

Behind the scenes we are using Azure Functions with Storage Queues, Table Storage and Proxies.

![Architecture Diagram](_static/arch-diagram.png)
*Architecture Diagram generated using [https://functions-visualizer.azurewebsites.net/](https://functions-visualizer.azurewebsites.net/)*

## Resources ##

Please feel free to reach out to me with questions on twitter [@joescars](https://www.twitter.com/joescars)