export type MaybeInitialized<T> = Initialized<T> | Uninitialized;

export type Initialized<T> = {
  readonly data: T;
  isInitialized: true;
};

export type Uninitialized = {
  isInitialized: false;
};

export function maybeInitialized<T>(data?: T): MaybeInitialized<T> {
  return data !== undefined ? initialized(data) : uninitialized();
}

export function initialized<T>(data: T): Initialized<T> {
  return { data, isInitialized: true };
}

export function uninitialized(): Uninitialized {
  return { isInitialized: false };
}
