interface LoadingState {
  type: "loading";
  data: string[];
}

interface ErrorState {
  type: "error";
  message: string;
}

type FetchStatus = LoadingState | ErrorState;

// type FetchStatus = "loading" | "error"
type StatusType = FetchStatus["type"];
