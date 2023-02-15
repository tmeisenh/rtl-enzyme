# wtf

Before rtl, there was enzyme. I liked it b/c it allowed prop based testing instead of DOM based testing.
But enzyme didn't work well with hooks and eventually it fell out of favor when one of the react gods birthed rtl.

I have a philosophical disagreement with the testing forced upon us by rtl because I dislike DOM based testing. I want to test my React code as "React code" -- as functions and not as rendered text/DOM. I want to test connections and interfaces between components (aka the complexity of the application) rather than what they visually look like. I also hate its API with findBy*, queryBy*, behaving slightly different but similar enough I can never remember which one I like and which one I hate (I hate the one that blows up when the selector doesn't match anything).

On large apps, which this demo project is not, the higher components tend to require a lot of setup b/c they by extension "inherit" the setup of everything beneath them. This could mean mocking a number of network calls for example that child components make which the tests for the top most component probably doesn't care about. I find rtl makes me abandon encapsulation and abstraction of the test unit.

In this example, from the App's test concerns all it need validate is that it lays out a TableView and provides the TableView with the correct items. It does not need to know if the TableView renders the items. It does not need to know how the TableViewItem renders each item.

The TableView's tests are then responsible for validating that the TableView renders a TableViewItem for each provided item. It does not need to concern itself with how the TableViewItem renders the item. It just needs to make sure that the TableView makes a new TableViewItem for each item and it does so in the proper list order.

The TableViewItem's tests are then responsible for validating (these are not written) that the str data is rendered correctly based on the business rules. Because of the different strategies we "need" to render the TableViewItems correctly, TableViewItem's responsibilities are just knowing to use the right strategy. Its tests should just validate that it uses the right strategy and defer visual/DOM testing to the specific strategies.

The only place in this app I'd bother with DOM based testing is in the small strategies for displaying an item in our table view. Everything else is all interface/connections and prop based testing is easier and less brittle. Brittle in the sense that the interfaces between components don't usually change that much compared to the visual aspects.
