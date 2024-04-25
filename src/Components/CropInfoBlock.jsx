import React from 'react'

const cropInfoMap = {
    mango: {
      grow: "Mangoes thrive in warm tropical climates with well-drained soil. Plant mango trees in a sunny spot and water regularly. Prune as needed.",
      fertilizer: "Use a balanced fertilizer with a higher ratio of nitrogen for the first few years. Switch to a low-nitrogen, high-potassium fertilizer for mature trees.",
      timeline: "Mango trees typically bear fruit within 3-5 years of planting. The fruiting season varies depending on the variety, usually between April and August.",
      pests: "Common pests include mango leafhoppers, fruit flies, and mango seed weevils. Monitor trees regularly and use organic or chemical pesticides as needed.",
      diseases: "Mango trees are susceptible to anthracnose, powdery mildew, and bacterial black spot. Apply fungicides and practice good sanitation to prevent disease spread.",
    },
    pigeonpeas: {
      grow: "Pigeonpeas are drought-tolerant and grow well in warm climates with sandy or loamy soil. Plant seeds in well-drained soil and space them adequately.",
      fertilizer: "Pigeonpeas generally require little fertilizer. Adding organic compost or manure before planting can improve soil fertility.",
      timeline: "Pigeonpeas are usually ready for harvest 5-6 months after planting. They can be harvested multiple times during the season.",
      pests: "Pigeonpeas may be affected by pod borers and aphids. Use insecticides and cultural practices like crop rotation to manage pest populations.",
      diseases: "Pigeonpeas are susceptible to wilt and root rot diseases. Plant disease-resistant varieties and ensure proper drainage to prevent disease development.",
    },
    apple: {
      grow: "Apples require a temperate climate with cold winters and mild summers. Plant apple trees in well-drained soil and full sun. Prune regularly to shape the tree and promote fruit production.",
      fertilizer: "Use a balanced fertilizer in early spring before the tree begins to bloom. Avoid excessive nitrogen fertilizers, as they can promote vegetative growth at the expense of fruit production.",
      timeline: "Apple trees typically bear fruit 2-5 years after planting. The fruiting season varies depending on the variety, usually in late summer or early fall.",
      pests: "Common apple pests include apple maggots, codling moths, and aphids. Use insecticidal sprays and traps to manage pest populations.",
      diseases: "Apples are susceptible to apple scab, powdery mildew, and fire blight. Apply fungicides and practice good sanitation to prevent disease spread.",
    },
    chickpea: {
      grow: "Chickpeas grow well in cool, dry climates with well-drained soil. Plant seeds in early spring and ensure adequate spacing between plants.",
      fertilizer: "Chickpeas have low fertilizer requirements, but a balanced fertilizer with phosphorus and potassium can help improve yields.",
      timeline: "Chickpeas are ready for harvest 90-100 days after planting. Harvest when the pods are dry and the seeds are firm.",
      pests: "Common chickpea pests include pod borers and pod suckers. Monitor plants regularly and use cultural practices like crop rotation to manage pests.",
      diseases: "Chickpeas are susceptible to fungal diseases like Ascochyta blight and Fusarium wilt. Use disease-resistant varieties and practice crop rotation to reduce disease pressure.",
    },
    orange: {
      grow: "Oranges thrive in subtropical to tropical climates with well-drained, slightly acidic soil. Plant orange trees in a sunny location protected from strong winds.",
      fertilizer: "Apply a balanced fertilizer with a higher ratio of nitrogen in the spring and fall. Avoid over-fertilization, which can lead to excessive vegetative growth.",
      timeline: "Oranges typically take 2-3 years to bear fruit after planting. Harvest oranges when they are fully ripe and have reached the desired sweetness.",
      pests: "Common orange pests include citrus leaf miners, aphids, and citrus fruit borers. Use insecticidal soaps or oils to control pests.",
      diseases: "Oranges are susceptible to diseases like citrus greening and citrus canker. Practice good sanitation and remove infected trees to prevent disease spread.",
    },
    rice: {
      grow: "Rice grows best in flooded fields or paddies in warm, humid climates. Plant rice seeds in prepared soil or directly in flooded fields during the wet season.",
      fertilizer: "Rice requires nitrogen-rich fertilizers. Apply fertilizers in split doses during different growth stages to promote healthy growth and high yields.",
      timeline: "Rice typically matures in 3-6 months, depending on the variety and growing conditions. Harvest when the grains are fully developed but still tender.",
      pests: "Common rice pests include rice stem borers, rice leaf folders, and rice water weevils. Use integrated pest management practices to control pests.",
      diseases: "Rice is susceptible to diseases like blast, sheath blight, and bacterial leaf blight. Use disease-resistant varieties and crop rotation to manage diseases.",
    },
    maize: {
      grow: "Maize grows well in warm climates with well-drained soil and adequate moisture. Plant maize seeds in rows with spacing suitable for the variety and local conditions.",
      fertilizer: "Maize requires nitrogen-rich fertilizers, especially during the early growth stages. Apply fertilizers based on soil test results and crop requirements.",
      timeline: "Maize typically matures in 60-100 days, depending on the variety and growing conditions. Harvest when the kernels are fully developed and mature.",
      pests: "Common maize pests include corn earworms, fall armyworms, and maize weevils. Use integrated pest management practices and resistant varieties to control pests.",
      diseases: "Maize is susceptible to diseases like corn smut, northern leaf blight, and common rust. Use disease-resistant varieties and crop rotation to manage diseases.",
    },
    mungbean: {
      grow: "Mungbeans thrive in warm climates with well-drained sandy loam soil. Plant mungbean seeds directly in the field after the last frost date.",
      fertilizer: "Mungbeans have low fertilizer requirements, but a balanced fertilizer with phosphorus and potassium can improve yields. Avoid excess nitrogen, which can reduce pod formation.",
      timeline: "Mungbeans typically mature in 60-90 days, depending on the variety and growing conditions. Harvest when the pods are dry and the seeds are firm.",
      pests: "Common mungbean pests include aphids, leafhoppers, and pod borers. Use insecticidal soaps or oils to control pests and encourage natural predators.",
      diseases: "Mungbeans are susceptible to fungal diseases like powdery mildew and anthracnose. Practice crop rotation and avoid planting in wet, humid conditions to reduce disease risk.",
    },
    watermelon: {
      grow: "Watermelons thrive in warm climates with well-drained, sandy soil. Plant watermelon seeds or transplants in full sun and provide consistent moisture throughout the growing season.",
      fertilizer: "Apply a balanced fertilizer before planting and side-dress with nitrogen fertilizer during the growing season. Avoid excessive nitrogen, which can result in vine growth at    the expense of fruit production.",
      timeline: "Watermelons typically mature in 70-90 days, depending on the variety and growing conditions. Harvest when the fruit's underside turns yellow and the stem begins to dry.",
      pests: "Common watermelon pests include aphids, cucumber beetles, and spider mites. Use row covers, insecticidal sprays, or natural predators to control pests.",
      diseases: "Watermelons are susceptible to diseases like powdery mildew, fusarium wilt, and anthracnose. Use disease-resistant varieties and practice crop rotation to manage diseases.",
    },
    kidneybeans: {
      grow: "Kidney beans grow well in warm climates with well-drained soil and adequate moisture. Plant kidney bean seeds directly in the garden after the last frost date.",
      fertilizer: "Kidney beans have low fertilizer requirements, but a balanced fertilizer with phosphorus and potassium can improve yields. Avoid excess nitrogen, which can promote vegetative growth.",
      timeline: "Kidney beans typically mature in 90-120 days, depending on the variety and growing conditions. Harvest when the pods are fully developed but still tender.",
      pests: "Common kidney bean pests include bean beetles, aphids, and spider mites. Use insecticidal sprays or natural predators to control pests.",
      diseases: "Kidney beans are susceptible to diseases like bacterial blight, rust, and common bean mosaic virus. Practice crop rotation and use disease-resistant varieties to manage diseases.",
    },
    lentil: {
      grow: "Lentils grow well in cool climates with well-drained soil. Plant lentil seeds in early spring as soon as the soil can be worked.",
      fertilizer: "Lentils have low fertilizer requirements, but a balanced fertilizer with phosphorus and potassium can improve yields. Avoid excess nitrogen, which can promote vegetative growth.",
      timeline: "Lentils typically mature in 90-110 days, depending on the variety and growing conditions. Harvest when the pods are dry and the seeds are hard.",
      pests: "Common lentil pests include aphids, thrips, and pod borers. Use insecticidal soaps or oils to control pests and encourage natural predators.",
      diseases: "Lentils are susceptible to diseases like ascochyta blight, root rot, and fusarium wilt. Practice crop rotation and use disease-resistant varieties to manage diseases.",
    },
    banana: {
      grow: "Bananas thrive in tropical climates with well-drained soil and consistent moisture. Plant banana pups or suckers in a sunny location protected from strong winds.",
      fertilizer: "Apply a balanced fertilizer with a higher ratio of potassium to promote fruit production. Mulch around the base of the plants to conserve moisture and suppress weeds.",
      timeline: "Banana plants typically bear fruit 9-12 months after planting. Harvest when the fruit is fully developed and begins to change color.",
      pests: "Common banana pests include banana weevils, thrips, and nematodes. Use cultural practices like removing infected plants and applying organic pesticides to control pests.",
      diseases: "Bananas are susceptible to diseases like fusarium wilt, black sigatoka, and banana bunchy top virus. Use disease-resistant varieties and practice good sanitation to prevent disease spread.",
    },
    blackgram: {
      grow: "Black gram grows well in warm climates with well-drained soil and adequate moisture. Plant black gram seeds in rows or hills with spacing suitable for the variety.",
      fertilizer: "Black gram has low fertilizer requirements, but a balanced fertilizer with phosphorus and potassium can improve yields. Avoid excess nitrogen, which can promote vegetative growth.",
      timeline: "Black gram typically matures in 60-90 days, depending on the variety and growing conditions. Harvest when the pods are dry and the seeds are hard.",
      pests: "Common black gram pests include pod borers, aphids, and leafhoppers. Use insecticidal soaps or oils to control pests and encourage natural predators.",
      diseases: "Black gram is susceptible to diseases like powdery mildew, root rot, and anthracnose. Practice crop rotation and use disease-resistant varieties to manage diseases.",
    },
    muskmelon: {
      grow: "Muskmelons thrive in warm climates with well-drained soil and full sun. Plant muskmelon seeds or transplants in hills or rows with spacing suitable for the variety.",
      fertilizer: "Apply a balanced fertilizer before planting and side-dress with nitrogen fertilizer during the growing season. Avoid excessive nitrogen, which can result in vine growth at the expense of fruit production.",
      timeline: "Muskmelons typically mature in 80-100 days, depending on the variety and growing conditions. Harvest when the stem begins to slip easily from the fruit.",
      pests: "Common muskmelon pests include aphids, cucumber beetles, and spider mites. Use row covers, insecticidal sprays, or natural predators to control pests.",
      diseases: "Muskmelons are susceptible to diseases like powdery mildew, fusarium wilt, and bacterial fruit blotch. Use disease-resistant varieties and practice crop rotation to manage diseases.",
    },
    cotton: {
      grow: "Cotton thrives in warm climates with well-drained soil and full sun. Plant cotton seeds in rows with spacing suitable for the variety and local conditions.",
      fertilizer: "Apply a balanced fertilizer before planting and side-dress with nitrogen fertilizer during the growing season. Monitor soil fertility and adjust fertilizer applications as needed.",
      timeline: "Cotton typically matures in 150-180 days, depending on the variety and growing conditions. Harvest when the bolls have opened and the fibers are fully developed.",
      pests: "Common cotton pests include bollworms, aphids, and whiteflies. Use integrated pest management practices and resistant varieties to control pests.",
      diseases: "Cotton is susceptible to diseases like verticillium wilt, bacterial blight, and cotton root rot. Practice crop rotation and use disease-resistant varieties to manage diseases.",
    },
    papaya: {
      grow: "Papayas thrive in tropical climates with well-drained soil and full sun. Plant papaya seeds or transplants in a sheltered location protected from strong winds.",
      fertilizer: "Apply a balanced fertilizer with a higher ratio of potassium to promote fruit production. Mulch around the base of the plants to conserve moisture and suppress weeds.",
      timeline: "Papaya trees typically bear fruit within 6-9 months of planting. Harvest when the fruit is fully developed but still firm.",
      pests: "Common papaya pests include papaya fruit flies, aphids, and mealybugs. Use insecticidal soaps or oils to control pests and encourage natural predators.",
      diseases: "Papayas are susceptible to diseases like papaya ringspot virus, powdery mildew, and anthracnose. Use disease-resistant varieties and practice good sanitation to prevent disease spread.",
    },
    pomegranate: {
      grow: "Pomegranates thrive in hot, dry climates with well-drained soil and full sun. Plant pomegranate trees in a location protected from strong winds and frost.",
      fertilizer: "Apply a balanced fertilizer with a higher ratio of potassium to promote fruit production. Mulch around the base of the plants to conserve moisture and suppress weeds",    timeline: "Pomegranate trees typically bear fruit within 2-3 years of planting. The fruiting season varies depending on the variety, usually in late summer or fall.",
      pests: "Common pomegranate pests include aphids, scale insects, and fruit borers. Use insecticidal soaps or oils to control pests and encourage natural predators.",
      diseases: "Pomegranates are susceptible to diseases like fungal root rot, bacterial blight, and powdery mildew. Use disease-resistant varieties and practice good sanitation to prevent disease spread.",
    },
    mothbeans: {
      grow: "Mothbeans grow well in warm climates with well-drained soil and adequate moisture. Plant mothbean seeds in rows or hills with spacing suitable for the variety.",
      fertilizer: "Mothbeans have low fertilizer requirements, but a balanced fertilizer with phosphorus and potassium can improve yields. Avoid excess nitrogen, which can promote vegetative growth.",
      timeline: "Mothbeans typically mature in 60-90 days, depending on the variety and growing conditions. Harvest when the pods are dry and the seeds are hard.",
      pests: "Common mothbean pests include pod borers, aphids, and leafhoppers. Use insecticidal soaps or oils to control pests and encourage natural predators.",
      diseases: "Mothbeans are susceptible to diseases like powdery mildew, root rot, and anthracnose. Practice crop rotation and use disease-resistant varieties to manage diseases.",
    },
    coconut: {
      grow: "Coconuts thrive in tropical coastal regions with sandy, well-drained soil and ample sunlight. Plant coconut palms in a location protected from strong winds and salt spray.",
      fertilizer: "Coconut palms have low fertilizer requirements and can thrive in poor soils. Apply a balanced fertilizer with micronutrients if soil deficiencies are identified.",
      timeline: "Coconut palms typically start bearing fruit within 6-10 years of planting. The fruiting season lasts year-round, with peak production during the rainy season.",
      pests: "Common coconut pests include coconut beetles, rhinoceros beetles, and coconut mites. Use cultural practices like removing infested fronds and applying insecticidal sprays to control pests.",
      diseases: "Coconuts are susceptible to diseases like lethal yellowing, bud rot, and coconut root wilt. Use disease-resistant varieties and practice good sanitation to prevent disease spread.",
    },
    grapes: {
      grow: "Grapes thrive in temperate climates with well-drained soil and full sun. Plant grapevines in rows with trellises or supports for vine training and fruit production.",
      fertilizer: "Apply a balanced fertilizer in early spring before bud break and side-dress with nitrogen fertilizer during the growing season. Monitor soil fertility and adjust fertilizer applications as needed.",
      timeline: "Grapes typically bear fruit within 2-3 years of planting. The fruiting season varies depending on the variety, usually in late summer or early fall.",
      pests: "Common grape pests include grape berry moths, grapevine beetles, and spider mites. Use insecticidal sprays and cultural practices like pruning to manage pests.",
      diseases: "Grapes are susceptible to diseases like powdery mildew, downy mildew, and black rot. Apply fungicides and practice good sanitation to prevent disease spread.",
    },
    jute: {
      grow: "Jute thrives in warm, humid climates with well-drained loamy soil and ample sunlight. Plant jute seeds directly in the field after the last frost date.",
      fertilizer: "Jute has moderate fertilizer requirements. Apply a balanced fertilizer before planting and side-dress with nitrogen fertilizer during the growing season.",
      timeline: "Jute plants typically mature in 120-150 days, depending on the variety and growing conditions. Harvest when the plants begin to flower but before the fibers become too mature.",
      pests: "Common jute pests include jute stem weevils, aphids, and jute leafhoppers. Use insecticidal soaps or oils to control pests and encourage natural predators.",
      diseases: "Jute is susceptible to diseases like root rot, anthracnose, and leaf spot. Practice crop rotation and use disease-resistant varieties to manage diseases.",
    },
    coffee: {
      grow: "Coffee thrives in tropical climates with well-drained, acidic soil and ample rainfall. Plant coffee seeds or seedlings in shaded locations protected from direct sunlight and strong winds.",
      fertilizer: "Coffee plants have moderate fertilizer requirements. Apply a balanced fertilizer with micronutrients in early spring and again after the first harvest.",
      timeline: "Coffee plants typically start producing beans 3-4 years after planting. The fruiting season varies depending on the variety and growing conditions.",
      pests: "Common coffee pests include coffee berry borers, coffee leaf miners, and coffee rust mites. Use cultural practices like pruning and shade management to control pests.",
      diseases: "Coffee is susceptible to diseases like coffee leaf rust, coffee berry disease, and root rot. Use disease-resistant varieties and practice good sanitation to prevent disease spread.",
    },
  };  
  
const CropInfoBlock = ({crop}) => {
    const { grow, fertilizer, timeline, pests, diseases } = cropInfoMap[crop];

    return (
      <div className="bg-white shadow-md rounded-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">{crop.toUpperCase()}</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">How to Grow:</h3>
          <p>{grow}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Recommended Fertilizers:</h3>
          <p>{fertilizer}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Timeline:</h3>
          <p>{timeline}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Common Pests:</h3>
          <p>{pests}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Common Diseases:</h3>
          <p>{diseases}</p>
        </div>
      </div>
    );
}

export default CropInfoBlock