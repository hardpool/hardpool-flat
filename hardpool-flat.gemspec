# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "hardpool-flat"
  spec.version       = "2.1.0"
  spec.authors       = ["Hardik Dabhi"]
  spec.email         = ["hardik.dabhi@live.co.uk"]

  spec.summary       = "Jekyll flat theme with bootstrap for personal portflio."
  spec.homepage      = "https://github.com/hardpool/hardpool-flat"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 12.0"
end
