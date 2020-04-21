# bigram-counter

## Getting Started
Clone this repo and install the dependencies (only needed for testing) using:
```
npm install
```

## Running the Counter
You can count the bigrams on an arbitrary block of text like so:
```
node index text="The quick brown fox and the quick blue hare."
```

You can also load multiple samples into a file and count the bigrams for each line like so:
```
node index file="/absolute/path/to/local/file"
```

## Testing
Run the unit tests like so:
```
npm test
```

To include the coverage report as well, use:
```
npm run coverage
```
