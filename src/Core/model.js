// @flow
export type Dispatch = typeof Dispatch;

export type Action = {
  type: string,
  meta?: Object,
  payload?: any,
  error?: any,
};

export type Route = {
	path: string,
	component: React$Element,
	isPrivate: boolean
};
