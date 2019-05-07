#ReadMe

##Actions:

Add chapter
Add topic
Edit chapter
Edit topic
Delete chapter
Delete topic
Show Modal
Hide Modal


##State shape:

{
	chapters: [
		{
			id: moment().format(),
			name: "",
			standard: "",
			subject: "",
			topics: [{
				id: moment().format(),
				name: "",
			}],
		}
	]
	modal: {
		showModal: false,
		itemType: "",
		actionType: "",
		itemId: "",
		secondaryId: "",
	}
	syllabus: {
		standard: "",
		subject: "",
	}
}


##State slices:

###Slice 1 - Chapters:
{
	[{
		id,
		name,
		standard,
		subject,
		topics: []
	}]
}

###Slice 2 - Modal:
{
	showModal,
	itemType,
	actionType,
	itemId,
	secondaryId,
}

###Slice 3 - Syllabus:
{
	{
		standard: "",
		subject: "",
	}
}

##Components:

SyllabusApp
ChapterList
ChapterItem
TopicList
TopicItem
Modal


##Containers:

SyllabusControl
SyllabusTable