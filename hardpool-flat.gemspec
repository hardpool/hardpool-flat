# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "hardpool-flat"
  spec.version       = "1.0.0"
  spec.authors       = ["Hardik Dabhi"]
  spec.email         = ["hardik.dabhi@live.co.uk"]

  spec.summary       = "Write a short summary, because Rubygems requires one."
  # spec.homepage      = "Put your gem's website or public repo URL here."
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 12.0"
end
