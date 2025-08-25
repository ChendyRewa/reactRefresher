import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/241461667_108678318235383_8942931679398586567_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=LHb6N2A-mrMQ7kNvwHmaJnx&_nc_oc=Adn81tWjZNypWWxQUBooU0EDFqBYc3am4tpvM8pczqlk6kYl6OQQQyv7lv9XS6r54YY0ysy9KWidzmcOjboocm6f&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=v9d-NekT48b0e0MigE0gOQ&oh=00_AfXHrelsCEPnbpSROf01rAUjuh5geBuSPwGJd2efNZWhZw&oe=68AC303D" alt="application logo" className="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>contact US</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
    )
}

const restaurantList=[
    {
        "type": "restaurant",
        "info": {
            "resId": 21660643,
            "name": "Kibou",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/21660643/6ebd989851a9e406d0d57843ac743046_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/3/21660643/6ebd989851a9e406d0d57843ac743046_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "224",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.3",
                        "reviewCount": "222",
                        "reviewTextSmall": "222 Reviews",
                        "subtext": "222 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.3",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "2",
                        "reviewTextSmall": "2 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,500 for two"
            },
            "cfo": {
                "text": "₹600 for one"
            },
            "locality": {
                "name": "Model Town 2, New Delhi",
                "address": "B - 6, 4th Floor & Rooftop, Block - B, Gujranwala Town, Model Town 2, New Delhi",
                "localityUrl": "ncr/model-town-2-delhi-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/asian/",
                    "name": "Asian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/continental/",
                    "name": "Continental"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/thai/",
                    "name": "Thai"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,500 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 20,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "20% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/ncr/kibou-model-town-2-new-delhi/info",
            "clickActionDeeplink": ""
        },
        "distance": "8.9 km",
        "isPromoted": true,
        "promotedText": "Promoted",
        "trackingData": [
            {
                "table_name": "jadtracking",
                "payload": "{\"banner_id\":\"9417022\",\"bzone\":\"0\",\"campaign_id\":\"18393585\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"1\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21660643\",\"isNewAd\":\"34\",\"ad_position\":\"22\",\"slider_position\":\"22\",\"slider_sequence\":\"22\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":310,\\\"boosted_rank\\\":22,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.038449\\\",\\\"cost_for_two_ctr\\\":\\\"0.070625\\\",\\\"distance\\\":\\\"8.864964485168457\\\",\\\"organic_ctr\\\":\\\"0.019623\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"57\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.6960732842116697\\\",\\\"cost_for_two_ctr\\\":\\\"1\\\",\\\"cost_per_unit\\\":\\\"0.8609937507950642\\\",\\\"distance\\\":\\\"0.11066676072353757\\\",\\\"organic_ctr\\\":\\\"0.12493002900615745\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.0016823478098323883\\\"},\\\"search_id\\\":\\\"2220784f-2db5-4742-bae5-ccff8aa00e1a\\\",\\\"section_name\\\":\\\"more\\\",\\\"total_score\\\":0.501282414265238}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                "event_names": {
                    "tap": "{\"action\":\"click\"}",
                    "impression": "{\"action\":\"impression\"}",
                    "served": "{\"action\":\"serve\"}"
                }
            },
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2220784f-2db5-4742-bae5-ccff8aa00e1a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21660643\",\"element_type\":\"listing\",\"rank\":22,\"metadata\":{\"is_ad\":\"true\"}}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 21128204,
            "name": "Cedar Club House",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/4/21128204/3a91d85b5b19ac7044deb68ee188a982_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/4/21128204/3a91d85b5b19ac7044deb68ee188a982_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/4/21128204/33c7e7419272d4c7f14e60aa69047a6d_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "2,054",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": {
                    "text": "Newly Opened",
                    "color": "#FFFFFF",
                    "bgColor": "#F4A266",
                    "bgColorV2": {
                        "type": "green",
                        "tint": "100"
                    },
                    "subtitle": "OUTLET",
                    "ratingV2": "New"
                },
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.3",
                        "reviewCount": "2,054",
                        "reviewTextSmall": "2,054 Reviews",
                        "subtext": "2,054 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.3",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": true
                    }
                }
            },
            "cft": {
                "text": "₹2,200 for two"
            },
            "cfo": {
                "text": "₹900 for one"
            },
            "locality": {
                "name": "Connaught Place, New Delhi",
                "address": "48, Ground Floor & Mezzanine Floor, Tolstoy Lane, Atul Grove Road, Janpath, Connaught Place, New Delhi",
                "localityUrl": "ncr/connaught-place-delhi-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/cafes/",
                    "name": "Cafe"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹2,200 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 10,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "10% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/ncr/cedar-club-house-connaught-place-new-delhi/info",
            "clickActionDeeplink": ""
        },
        "distance": "993 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2220784f-2db5-4742-bae5-ccff8aa00e1a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21128204\",\"element_type\":\"listing\",\"rank\":23}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18996133,
            "name": "Ghoomar Traditional Thali Restaurant",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/18996133/0ae5415f7996b7d81d40650c2238d016_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/3/18996133/0ae5415f7996b7d81d40650c2238d016_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/3/18996133/b2ad3cc02513add7c3cfe8029011cb7d_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "3,574",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.8",
                        "reviewCount": "1,370",
                        "reviewTextSmall": "1,370 Reviews",
                        "subtext": "1,370 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.8",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "2,204",
                        "reviewTextSmall": "2,204 Reviews",
                        "subtext": "2,204 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,000 for two"
            },
            "cfo": {
                "text": "₹400 for one"
            },
            "locality": {
                "name": "Connaught Place, New Delhi",
                "address": "K-43, 1st Floor, Opposite PVR Plaza, Connaught Place, New Delhi",
                "localityUrl": "ncr/connaught-place-delhi-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODhcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/rajasthani/",
                    "name": "Rajasthani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,000 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 10,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "10% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/ghoomarthalicp/info",
            "clickActionDeeplink": ""
        },
        "distance": "1.4 km",
        "isPromoted": true,
        "promotedText": "Promoted",
        "trackingData": [
            {
                "table_name": "jadtracking",
                "payload": "{\"banner_id\":\"9405151\",\"bzone\":\"0\",\"campaign_id\":\"18381696\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"1\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"18996133\",\"isNewAd\":\"34\",\"ad_position\":\"24\",\"slider_position\":\"24\",\"slider_sequence\":\"24\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":455,\\\"boosted_rank\\\":24,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.035143\\\",\\\"cost_for_two_ctr\\\":\\\"0.035707\\\",\\\"distance\\\":\\\"1.125722050666809\\\",\\\"organic_ctr\\\":\\\"0.106844\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"101\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.6362220975071058\\\",\\\"cost_for_two_ctr\\\":\\\"0.5055858407079646\\\",\\\"cost_per_unit\\\":\\\"0.3993721642708731\\\",\\\"distance\\\":\\\"0.9582945254083395\\\",\\\"organic_ctr\\\":\\\"0.759001722922134\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.004423951648077762\\\"},\\\"search_id\\\":\\\"2220784f-2db5-4742-bae5-ccff8aa00e1a\\\",\\\"section_name\\\":\\\"more\\\",\\\"total_score\\\":0.4285197761929439}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                "event_names": {
                    "tap": "{\"action\":\"click\"}",
                    "impression": "{\"action\":\"impression\"}",
                    "served": "{\"action\":\"serve\"}"
                }
            },
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2220784f-2db5-4742-bae5-ccff8aa00e1a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18996133\",\"element_type\":\"listing\",\"rank\":24,\"metadata\":{\"is_ad\":\"true\"}}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 21433110,
            "name": "Begeterre - Museum Themed Restaurant",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/0/21433110/e93182e747ae02c616362d8cf5353b2d_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/0/21433110/e93182e747ae02c616362d8cf5353b2d_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "1,262",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.3",
                        "reviewCount": "1,262",
                        "reviewTextSmall": "1,262 Reviews",
                        "subtext": "1,262 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.3",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹3,000 for two"
            },
            "cfo": {
                "text": "₹1,200 for one"
            },
            "locality": {
                "name": "Sector 43, Gurgaon",
                "address": "Ground Floor, G-02, Golf Course Rd Sector 43, Gurgaon",
                "localityUrl": "ncr/sector-43-gurgaon-gurugram-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/asian/",
                    "name": "Asian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/modern-indian/",
                    "name": "Modern Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/sea-food/",
                    "name": "Seafood"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/italian/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/desserts/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹3,000 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/ncr/begeterre-museum-themed-restaurant-sector-43-gurgaon/info",
            "clickActionDeeplink": ""
        },
        "distance": "22 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2220784f-2db5-4742-bae5-ccff8aa00e1a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21433110\",\"element_type\":\"listing\",\"rank\":25}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 21513480,
            "name": "Pulp The Delicacy",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/0/21513480/c10f2e7b66c83879e2af89bd0a0c7b7a_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/0/21513480/c10f2e7b66c83879e2af89bd0a0c7b7a_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/0/21513480/fa6a51a501c8647630220b339442bd9b_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.7",
                "rating_text": "3.7",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "142",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.1",
                        "reviewCount": "138",
                        "reviewTextSmall": "138 Reviews",
                        "subtext": "138 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.1",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.2",
                        "reviewCount": "4",
                        "reviewTextSmall": "4 Reviews",
                        "subtext": "4 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "yellow",
                            "tint": "400"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,200 for two"
            },
            "cfo": {
                "text": "₹500 for one"
            },
            "locality": {
                "name": "Connaught Place, New Delhi",
                "address": "Mezzanine D/26, Ground Floor, Connaught Place, New Delhi",
                "localityUrl": "ncr/connaught-place-delhi-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/pasta/",
                    "name": "Pasta"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/rolls/",
                    "name": "Rolls"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,200 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 20,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "20% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/ncr/pulp-the-delicacy-connaught-place-new-delhi/info",
            "clickActionDeeplink": ""
        },
        "distance": "1.4 km",
        "isPromoted": true,
        "promotedText": "Promoted",
        "trackingData": [
            {
                "table_name": "jadtracking",
                "payload": "{\"banner_id\":\"9020489\",\"bzone\":\"0\",\"campaign_id\":\"17996310\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"1\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21513480\",\"isNewAd\":\"109\",\"ad_position\":\"26\",\"slider_position\":\"26\",\"slider_sequence\":\"26\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":476,\\\"boosted_rank\\\":26,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0\\\",\\\"cost_for_two_ctr\\\":\\\"0.040492\\\",\\\"distance\\\":\\\"1.1034215688705444\\\",\\\"organic_ctr\\\":\\\"0.010203\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"12761\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0\\\",\\\"cost_for_two_ctr\\\":\\\"0.5733380530973452\\\",\\\"cost_per_unit\\\":\\\"0.22488438440826025\\\",\\\"distance\\\":\\\"0.960736948900863\\\",\\\"organic_ctr\\\":\\\"0.056449326461030694\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.793258146925042\\\"},\\\"search_id\\\":\\\"2220784f-2db5-4742-bae5-ccff8aa00e1a\\\",\\\"section_name\\\":\\\"more\\\",\\\"total_score\\\":0.426548366811756}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                "event_names": {
                    "tap": "{\"action\":\"click\"}",
                    "impression": "{\"action\":\"impression\"}",
                    "served": "{\"action\":\"serve\"}"
                }
            },
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2220784f-2db5-4742-bae5-ccff8aa00e1a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21513480\",\"element_type\":\"listing\",\"rank\":26,\"metadata\":{\"is_ad\":\"true\"}}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20950521,
            "name": "Shri Ram Sweets & Restaurant",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/1/20950521/9f5fb556d9621d1ef09007a8e44f950a_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/1/20950521/9f5fb556d9621d1ef09007a8e44f950a_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/1/20950521/024e5d8a2bb3afa82cbaaa17ba478e44_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "0",
                "rating_text": "-",
                "rating_subtitle": "Not rated",
                "rating_color": "CBCBCB",
                "votes": "1",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "1",
                        "reviewTextSmall": "1 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹200 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Manesar, Gurgaon",
                "address": "Shop 12, Farrukhnagar, Fazilpur Road, Manesar, Gurgaon",
                "localityUrl": "ncr/manesar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/mithai/",
                    "name": "Mithai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/momos/",
                    "name": "Momos"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/street-food/",
                    "name": "Street Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹200 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/ncr/shri-ram-sweets-restaurant-manesar-gurgaon/info",
            "clickActionDeeplink": ""
        },
        "distance": "43 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2220784f-2db5-4742-bae5-ccff8aa00e1a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20950521\",\"element_type\":\"listing\",\"rank\":27}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18128883,
            "name": "Yes Minister - Pub & Kitchen",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/18128883/8f53893da1e9ea15dc7a13d5b20b042d_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/3/18128883/8f53893da1e9ea15dc7a13d5b20b042d_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "1,388",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.1",
                        "reviewCount": "1,388",
                        "reviewTextSmall": "1,388 Reviews",
                        "subtext": "1,388 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.1",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹2,000 for two"
            },
            "cfo": {
                "text": "₹800 for one"
            },
            "locality": {
                "name": "Adchini, New Delhi",
                "address": "Essex Farms, 4, Adchini, New Delhi",
                "localityUrl": "ncr/adchini-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/continental/",
                    "name": "Continental"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/italian/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹2,000 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/ncr/yes-minister-pub-kitchen-adchini-new-delhi/info",
            "clickActionDeeplink": ""
        },
        "distance": "9.1 km",
        "isPromoted": true,
        "promotedText": "Promoted",
        "trackingData": [
            {
                "table_name": "jadtracking",
                "payload": "{\"banner_id\":\"9416555\",\"bzone\":\"0\",\"campaign_id\":\"18393118\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"1\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"18128883\",\"isNewAd\":\"34\",\"ad_position\":\"28\",\"slider_position\":\"28\",\"slider_sequence\":\"28\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":211,\\\"boosted_rank\\\":28,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0\\\",\\\"cost_for_two_ctr\\\":\\\"0.05657\\\",\\\"distance\\\":\\\"9.30147647857666\\\",\\\"organic_ctr\\\":\\\"0.002438\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"430\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0\\\",\\\"cost_for_two_ctr\\\":\\\"0.8009911504424779\\\",\\\"cost_per_unit\\\":\\\"0.8708634795191452\\\",\\\"distance\\\":\\\"0.06285850450698095\\\",\\\"organic_ctr\\\":\\\"0\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.024923671256776123\\\"},\\\"search_id\\\":\\\"2220784f-2db5-4742-bae5-ccff8aa00e1a\\\",\\\"section_name\\\":\\\"more\\\",\\\"total_score\\\":0.42354812608793974}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                "event_names": {
                    "tap": "{\"action\":\"click\"}",
                    "impression": "{\"action\":\"impression\"}",
                    "served": "{\"action\":\"serve\"}"
                }
            },
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2220784f-2db5-4742-bae5-ccff8aa00e1a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18128883\",\"element_type\":\"listing\",\"rank\":28,\"metadata\":{\"is_ad\":\"true\"}}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 21674455,
            "name": "Pankh",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/5/21674455/6f9910e78c1af4a9bf20c7cc40697dd1_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/5/21674455/6f9910e78c1af4a9bf20c7cc40697dd1_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "250",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "250",
                        "reviewTextSmall": "250 Reviews",
                        "subtext": "250 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹2,000 for two"
            },
            "cfo": {
                "text": "₹800 for one"
            },
            "locality": {
                "name": "Punjabi Bagh, New Delhi",
                "address": "Punjabi Bagh Club, at Ring Road, Punjabi Bagh, New Delhi",
                "localityUrl": "ncr/punjabi-bagh-delhi-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/modern-indian/",
                    "name": "Modern Indian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹2,000 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 15,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "15% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/ncr/pankh-punjabi-bagh-new-delhi/info",
            "clickActionDeeplink": ""
        },
        "distance": "9 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2220784f-2db5-4742-bae5-ccff8aa00e1a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21674455\",\"element_type\":\"listing\",\"rank\":29}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 21329582,
            "name": "Resaca",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/2/21329582/91aac74583aff7d5423a64bcab6872f7_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/2/21329582/91aac74583aff7d5423a64bcab6872f7_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/2/21329582/f7684bfefb1aa95407a6f75c26e877bf_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "412",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "412",
                        "reviewTextSmall": "412 Reviews",
                        "subtext": "412 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,800 for two"
            },
            "cfo": {
                "text": "₹750 for one"
            },
            "locality": {
                "name": "Karol Bagh, New Delhi",
                "address": "7, 3rd Floor, Block 11, Pusa Road, New Delhi, Karol Bagh, New Delhi",
                "localityUrl": "ncr/karol-bagh-delhi-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/continental/",
                    "name": "Continental"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/sushi/",
                    "name": "Sushi"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/italian/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/desserts/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,800 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 15,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "15% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/ncr/resaca-karol-bagh-new-delhi/info",
            "clickActionDeeplink": ""
        },
        "distance": "2.6 km",
        "isPromoted": true,
        "promotedText": "Promoted",
        "trackingData": [
            {
                "table_name": "jadtracking",
                "payload": "{\"banner_id\":\"9352372\",\"bzone\":\"0\",\"campaign_id\":\"18328731\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"1\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21329582\",\"isNewAd\":\"34\",\"ad_position\":\"30\",\"slider_position\":\"30\",\"slider_sequence\":\"30\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":219,\\\"boosted_rank\\\":30,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.035498\\\",\\\"cost_for_two_ctr\\\":\\\"0.039565\\\",\\\"distance\\\":\\\"2.653930187225342\\\",\\\"organic_ctr\\\":\\\"0.008525\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"412\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.6426489490739903\\\",\\\"cost_for_two_ctr\\\":\\\"0.5602123893805311\\\",\\\"cost_per_unit\\\":\\\"0.46140893996734944\\\",\\\"distance\\\":\\\"0.790920049453233\\\",\\\"organic_ctr\\\":\\\"0.04425074696307712\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.0238021060502212\\\"},\\\"search_id\\\":\\\"2220784f-2db5-4742-bae5-ccff8aa00e1a\\\",\\\"section_name\\\":\\\"more\\\",\\\"total_score\\\":0.42346968893714587}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                "event_names": {
                    "tap": "{\"action\":\"click\"}",
                    "impression": "{\"action\":\"impression\"}",
                    "served": "{\"action\":\"serve\"}"
                }
            },
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2220784f-2db5-4742-bae5-ccff8aa00e1a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21329582\",\"element_type\":\"listing\",\"rank\":30,\"metadata\":{\"is_ad\":\"true\"}}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 22001940,
            "name": "TUBATA",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/0/22001940/b5640ec135bd0c0b31cfb4676a7bd564_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/0/22001940/b5640ec135bd0c0b31cfb4676a7bd564_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "0",
                "rating_text": "NEW",
                "rating_subtitle": "Not rated",
                "rating_color": "CBCBCB",
                "votes": "161",
                "subtext": "REVIEWS",
                "is_new": true
            },
            "ratingNew": {
                "newlyOpenedObj": {
                    "text": "Newly Opened",
                    "color": "#FFFFFF",
                    "bgColor": "#F4A266",
                    "bgColorV2": {
                        "type": "green",
                        "tint": "100"
                    },
                    "subtitle": "OUTLET",
                    "ratingV2": "New"
                },
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "161",
                        "reviewTextSmall": "161 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": true
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹2,500 for two"
            },
            "cfo": {
                "text": "₹1,000 for one"
            },
            "locality": {
                "name": "Pitampura, New Delhi",
                "address": "4TH FLOOR RCUBE MALL, CS 401, 402, Pitampura, New Delhi",
                "localityUrl": "ncr/pitampura-delhi-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹2,500 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/ncr/tubata-1-pitampura-new-delhi/info",
            "clickActionDeeplink": ""
        },
        "distance": "10.6 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2220784f-2db5-4742-bae5-ccff8aa00e1a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"22001940\",\"element_type\":\"listing\",\"rank\":31}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20719584,
            "name": "Akra",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/4/20719584/6ede76ac4e0854339ac642d8477436d2_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/4/20719584/6ede76ac4e0854339ac642d8477436d2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/4/20719584/c26428babf00bd5a99849c1d7711f78a_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "954",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.1",
                        "reviewCount": "954",
                        "reviewTextSmall": "954 Reviews",
                        "subtext": "954 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.1",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,500 for two"
            },
            "cfo": {
                "text": "₹600 for one"
            },
            "locality": {
                "name": "Lajpat Nagar 3, New Delhi",
                "address": "32, Feroz Gandhi Marg, 3rd Floor and 4th Floor, Link Road, Lajpat Nagar 3, New Delhi",
                "localityUrl": "ncr/lajpat-nagar-3-delhi-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/continental/",
                    "name": "Continental"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/italian/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/asian/",
                    "name": "Asian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/mediterranean/",
                    "name": "Mediterranean"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/modern-indian/",
                    "name": "Modern Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/mughlai/",
                    "name": "Mughlai"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,500 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 20,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "20% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/ncr/akra-lajpat-nagar-3-new-delhi/info",
            "clickActionDeeplink": ""
        },
        "distance": "6.8 km",
        "isPromoted": true,
        "promotedText": "Promoted",
        "trackingData": [
            {
                "table_name": "jadtracking",
                "payload": "{\"banner_id\":\"9312933\",\"bzone\":\"0\",\"campaign_id\":\"18289111\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"1\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"20719584\",\"isNewAd\":\"34\",\"ad_position\":\"32\",\"slider_position\":\"32\",\"slider_sequence\":\"32\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":467,\\\"boosted_rank\\\":32,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.045449\\\",\\\"cost_for_two_ctr\\\":\\\"0.05065\\\",\\\"distance\\\":\\\"6.787309169769287\\\",\\\"organic_ctr\\\":\\\"0.010471\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"1311\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.822799934826294\\\",\\\"cost_for_two_ctr\\\":\\\"0.7171681415929204\\\",\\\"cost_per_unit\\\":\\\"0.6263348466056057\\\",\\\"distance\\\":\\\"0.3382185328358033\\\",\\\"organic_ctr\\\":\\\"0.058397609718153186\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.07981805719982553\\\"},\\\"search_id\\\":\\\"2220784f-2db5-4742-bae5-ccff8aa00e1a\\\",\\\"section_name\\\":\\\"more\\\",\\\"total_score\\\":0.41260278358208485}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                "event_names": {
                    "tap": "{\"action\":\"click\"}",
                    "impression": "{\"action\":\"impression\"}",
                    "served": "{\"action\":\"serve\"}"
                }
            },
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2220784f-2db5-4742-bae5-ccff8aa00e1a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20719584\",\"element_type\":\"listing\",\"rank\":32,\"metadata\":{\"is_ad\":\"true\"}}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19257786,
            "name": "Noida Social",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19257786/51aa6cb08e9977a96432be5718b80bad_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/6/19257786/51aa6cb08e9977a96432be5718b80bad_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/2/308322/50a5d38023e518355ea504d4b89804c4_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.4",
                "rating_text": "4.4",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "9,568",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.5",
                        "reviewCount": "6,134",
                        "reviewTextSmall": "6,134 Reviews",
                        "subtext": "6,134 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.5",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "3,434",
                        "reviewTextSmall": "3,434 Reviews",
                        "subtext": "3,434 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹2,000 for two"
            },
            "cfo": {
                "text": "₹800 for one"
            },
            "locality": {
                "name": "Sector 18, Noida",
                "address": "Shop C 412, M 03, 3rd Floor, DLF Mall Of India, Sector 18, Noida",
                "localityUrl": "ncr/sector-18-noida-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/momos/",
                    "name": "Momos"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/rolls/",
                    "name": "Rolls"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjdcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/korean/",
                    "name": "Korean"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹2,000 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/ncr/noida-social-sector-18-noida/info",
            "clickActionDeeplink": ""
        },
        "distance": "12.6 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2220784f-2db5-4742-bae5-ccff8aa00e1a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19257786\",\"element_type\":\"listing\",\"rank\":33}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    }
]

const RestaurantCard=({resData})=>{
   const {info}=resData;
    return (
        <div className="res-card">
             <img className='res-card-img' src={info.image.url} alt={info.name}/>
             <h4>{info.name}</h4>
             <h6>{info.cft.text}</h6>
             <h6>{info.rating.aggregate_rating}</h6>
             <h6>{resData.distance}</h6>
        </div>
    )
}

const ResBody=()=>{
    console.log(restaurantList)
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
               {restaurantList.map((res)=>{
               return <RestaurantCard key={res.info.resId} resData={res}/>
               })} 
            </div>
            </div>
    )
}

const AppLayout=()=>{

    return (<div className="app">
        <Header></Header>
        <ResBody/>
    </div>)
}

const reactRoot=ReactDOM.createRoot(document.getElementById('root'));                         
reactRoot.render(<AppLayout/>)