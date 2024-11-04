export const ERROR_TYPE = {
    SERVER_ERROR: "SERVER_ERROR"
}

export const DEFAULT_NEWS = `New:Sticking to the announced timeline, India and China have completed disengagement in the Depsang and Demchok regions of Eastern Ladakh and patrolling will begin soon, said Army sources, adding that sweets will also be exchanged with troops from the Chinese side on the occasion of Diwali on Thursday.
The sources from the Indian Army said on Wednesday that the verification process is on and the modalities of patrolling will be decided by the ground commanders. Chinese Ambassador to India Xu Feihong told reporters in Kolkata hours later that the two countries had reached "important understandings".
"There was a very important meeting between President Xi Jinping and PM Narendra Modi (on the sidelines of the BRICS summit in Russia last week). Now that the two leaders have reached important understandings, they will be the guidelines for the further development of relations between our two countries. I hope that, under the guidance of this consensus, our relations will be moving forward smoothly in the future and they will not be restricted or interrupted by specific disagreements between our two sides," the ambassador said.
"As two neighbouring countries, it is natural that we have some differences and the most important thing is how to handle and solve them. The meeting of the two leaders has set a very good example for us on how to handle these differences," he added.`;

export const DEMO_COMMAND = [
    "Can you check my portfolio",
    "Please let me know about portfolio",
    "What's the update on my portfolio",
    "What's the current news about TATA",
    "tell me something about NHPC",
    "what's new on NHPC",
    "what relience doing it",
    "Give me the more detail about Apple",
    "Buy 5 stock of NHPC"
]

export const API_AND_DESCRIPTION = [
    {
        category: "news",
        description: "This will give you the the details or short news",
    },
    {
        category: "detailed-news",
        description: "This will give you the the details or detailed news",
    },
    {
        category: "portfolio-detail",
        description: "This will give the you overall summarized all detailed about porfolio section",
        data: null
    },
    {
        category: "pricing-stock",
        description: "This will return the pricing of stock",
    },
    {
        category: "buy-stock",
        description: "This will to buy stock with no of units",
    },
    {
        category: "sell-stock",
        description: "This will to sell stock with no of units",
    }
];

export const API_DATA_FIELDS = {
    ["news"]: "Identify and extract the main entity (such as a company, commodity, or organization name) from the following text. The text may vary in format, but it will always include a reference to one primary entity. Return only the extracted name without any additional text or formatting.\nText: \"Give me the detail or update of gold in India\"\nExpected Output: \"gold\"",
    ["detailed-news"]: "Identify and extract the main entity (such as a company, commodity, or organization name) from the following text. The text may vary in format, but it will always include a reference to one primary entity. Return only the extracted name without any additional text or formatting.\nText: \"Give me the detail or update of gold in India\"\nExpected Output: \"gold\"",
    ["portfolio-detail"]: null,
    ["pricing-stock"]: "Extract the name of the stock or company from the following command related to stock pricing. The command may vary in wording, but it will always include a reference to a stock or company name. Return only the name of the stock or company without any additional text or formatting return only plain text.\nCommand: \"What's the latest price of Tesla stock?\"\nExpected Output: \"Tesla\"",
    ["buy-stock"]: "Extract the stock name and the number of units to buy from the following command. The command may vary in wording, but it will always include a reference to a stock name and the quantity to purchase. Return only the stock name and the number of units, formatted as follows: {\"stockName\": \"<stock name>\", \"units\": <number>}.\nCommand: \"Buy 10 shares of Tesla.\"\nExpected Output: {\"stockName\": \"Tesla\", \"units\": 10}",
    ["sell-stock"]: "Extract the stock name and the number of units to sell from the following command. The command may vary in wording, but it will always include a reference to a stock name and the quantity to sell. Return only the stock name and the number of units, formatted as follows: {\"stockName\": \"<stock name>\", \"units\": <number>}.\nCommand: \"Sell 10 shares of Tesla.\"\nExpected Output: {\"stockName\": \"Tesla\", \"units\": 10}",
};

