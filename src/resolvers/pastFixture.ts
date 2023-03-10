import { PastFixtureResolvers } from '../types/schema'

export const PastFixture: PastFixtureResolvers = {
	was_home: ({ was_home }) => was_home,
	opponent_team: ({ opponent_team }) => opponent_team,
	total_points: ({ total_points }) => total_points,
	team_h_score: ({ team_h_score }) => team_h_score,
	team_a_score: ({ team_a_score }) => team_a_score,
	round: ({ round }) => round,
	minutes: ({ minutes }) => minutes,
	goals_scored: ({ goals_scored }) => goals_scored,
	assists: ({ assists }) => assists,
	clean_sheets: ({ clean_sheets }) => clean_sheets,
	goals_conceded: ({ goals_conceded }) => goals_conceded,
	own_goals: ({ own_goals }) => own_goals,
	penalties_saved: ({ penalties_saved }) => penalties_saved,
	penalties_missed: ({ penalties_missed }) => penalties_missed,
	yellow_cards: ({ yellow_cards }) => yellow_cards,
	red_cards: ({ red_cards }) => red_cards,
	saves: ({ saves }) => saves,
	bps: ({ bps }) => bps,
	value: ({ value }) => value,
	selected: ({ selected }) => selected
}
